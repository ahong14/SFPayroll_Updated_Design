import React, { useState, useEffect } from 'react';
import '../Awards/Awards.css';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

const AwardsSponsors = () => {
    const awardYears = [2021, 2020, 2019, 2018, 2017, 2016, 2015];
    const [allAwardUrls, setAllAwardUrls] = useState([]);
    const [bannerUrls, setBannerUrls] = useState([]);
    const [awardUrls, setAwardUrls] = useState([]);

    useEffect(() => {
        const yearPromises = [];
        awardYears.forEach((year) => {
            yearPromises.push(axios.get(`/api/images/awards?year=${year}`));
        });
        // wait for all promises to resolve, request made for each year
        Promise.all(yearPromises)
            .then((res) => {
                let allAwardResults = [];
                res.forEach((result) => {
                    allAwardResults = [
                        ...allAwardResults,
                        ...(result.data.result || result.data)
                    ];
                });

                // remove null results
                const urlResults = allAwardResults.filter((result) => {
                    return result !== null;
                });
                const updateAllAwardUrls = [...allAwardUrls, ...urlResults];

                setAllAwardUrls(updateAllAwardUrls);

                // get banner urls
                const updateBannerUrls = updateAllAwardUrls.filter((image) => {
                    return image.url.includes('banners');
                });
                setBannerUrls(updateBannerUrls);

                // get square award image urls
                const updateAwardUrls = updateAllAwardUrls.filter((image) => {
                    return !image.url.includes('banners');
                });
                setAwardUrls(updateAwardUrls);
            })
            .catch((err) => {
                alert(err);
            });
    }, []);

    // banner award image sources
    const bannerAwards = bannerUrls.map((image) => {
        return (
            <Grid item sm={3}>
                <img className="bannerImage" src={image.url} alt="banner" />
            </Grid>
        );
    });

    // award image sources
    const awards = awardUrls.map((image) => {
        return (
            <Grid item sm={4}>
                <img className="award_image" src={image.url} alt="award" />
            </Grid>
        );
    });

    return (
        <div className="card border-dark" id="awardsCard">
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                wrap="nowrap"
            >
                <div className="eventBanner">
                    <a
                        href="https://www.apacongress.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <img
                            className="eventBannerImage"
                            src="../../images/npw_2023_banner.jpeg"
                            alt="npw banner"
                        />
                    </a>
                </div>
            </Grid>

            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                wrap="nowrap"
            >
                <div className="eventBannerContainer">
                    <div className="eventBanner">
                        <a
                            href="https://californiapayroll.org"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img
                                className="eventBannerImage"
                                src="../images/cpc_2022_logo.png"
                                alt="prize"
                            />
                        </a>
                    </div>
                </div>
            </Grid>

            <div className="card-body awardsBody">
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <h1 className="italicUnderline"> Chapter Awards </h1>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    wrap="wrap"
                >
                    {bannerAwards}
                </Grid>

                <Grid
                    id="awardsGrid"
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    wrap="nowrap"
                >
                    {awards}
                </Grid>
            </div>
        </div>
    );
};

export default AwardsSponsors;
