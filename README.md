# THIS REPO IS NOT ACTIVE ANYMORE, SITE MOVED TO ANOTHER APPLICATION

# SFPayroll_Updated_Design
## Redesigned SF Payroll Website.
#### Homepage Banner Image Source: https://www.pexels.com/photo/architecture-bay-bridge-construction-417236/

## Description:
Full-stack web application that shows information, events, career
openings etc. for San Francisco Payroll Association. Built using
Node.js, Express.js, React.js, HTML/CSS, MongoDB, and Bootstrap with a
Nginx proxy/load balancer running in Docker Containers.

## Stack:

**Frontend**: React, Redux, Bootstrap

**Backend**: Node/Express, MongoDB, mLab

**Infra**: Nginx, Docker, Let's Encrypt, DigitalOcean

## Scripts:

renew_cert.sh 

1. Stops docker containers
2. Runs command `certbot renew`
3. When ssl certs are renewed, start up Docker containers again
