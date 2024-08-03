FROM hub-dev.paas.jnbank.com.cn/jiangnanbank/centos7-nginx-1.18:latest

COPY ./nginx.conf /etc/nginx/nginx.conf

ENV REGISTRY_HOST pisces-registry

RUN mkdir -p /home/jnnginx/web

ADD ./default-default.tar /home/jnnginx/web

RUN chmod -R 755  /home/jnnginx


EXPOSE 8089

CMD ["/usr/sbin/nginx", "-c", "/etc/nginx/nginx.conf"]
