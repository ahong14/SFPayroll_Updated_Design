FROM nginx

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

#RUN mkdir /etc/nginx/sites-available/sfpayroll.org

#COPY ./nginx.conf /etc/nginx/sites-available/sfpayroll.org

EXPOSE 80

EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
