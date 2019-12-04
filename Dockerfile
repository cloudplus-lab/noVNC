FROM python:latest
MAINTAINER tt
ADD . /root/VM-terminal
WORKDIR /root/VM-terminal
CMD ["./utils/websockify/websockify.py", "--web", "../../", "--target-config", "./token/token.conf", "6080"]

