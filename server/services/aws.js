const AWS = require('aws-sdk');

class AwsService {
    constructor() {
        AWS.config.update({
            accessKeyId: process.env.AWS_ACCESS_KEY,
            secretAccessKey: process.env.AWS_SECRET_KEY,
            region: process.env.AWS_REGION
        });

        this.s3 = new AWS.S3();
    }

    async getPreSignedUrl(key) {
        return new Promise((resolve, reject) => {
            let params = { Bucket: 'sfpayroll', Key: key };
            this.s3.getSignedUrl('getObject', params, (err, url) => {
                if (err) reject(err);
                resolve(url);
            });
        });
    }

    async getPreSignedBulletinUrls(objects) {
        let preSignedObjects = objects.map(async (object) => {
            object.signedUrl = await this.getPreSignedUrl(object.Key);
        });
        return [...preSignedObjects];
    }

    async getBulletinObjects() {
        return new Promise((resolve, reject) => {
            const bucketParams = {
                Bucket: process.env.AWS_BUCKET
            };

            this.s3.listObjectsV2(bucketParams, async (err, data) => {
                if (err) {
                    reject({
                        success: false,
                        message: err
                    });
                }
                let dataBulletins = data.Contents.filter((data) => {
                    return data.Key.includes('.pdf');
                });
                resolve([...dataBulletins]);
            });
        });
    }
}

module.exports = AwsService;
