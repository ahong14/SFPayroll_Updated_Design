const AWS = require('aws-sdk');

class AwsService {
    constructor() {
        this.s3 = null;
        this.baseS3Url = 'https://sfpayroll.s3.us-east-2.amazonaws.com/';
    }

    // singleton aws s3 instance
    getAwsS3Instance = () => {
        if (!this.s3) {
            AWS.config.update({
                accessKeyId: process.env.AWS_ACCESS_KEY,
                secretAccessKey: process.env.AWS_SECRET
            });

            this.s3 = new AWS.S3();
        }
        return this.s3;
    };

    async getAwardImages(year) {
        return new Promise((resolve, reject) => {
            const bucketParams = {
                Bucket: process.env.AWS_BUCKET,
                Prefix: `images/chapter_awards_${year}/`
            };

            const awsInstance = this.getAwsS3Instance();
            awsInstance.listObjectsV2(bucketParams, async (err, data) => {
                if (err) {
                    console.error(err);
                    reject(err);
                }

                const awardUrls = data.Contents.map((object) => {
                    if (object.Size && object.Size > 0) {
                        return {
                            url: `${this.baseS3Url}${object.Key}`
                        };
                    }
                });
                resolve(awardUrls);
            });
        });
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
