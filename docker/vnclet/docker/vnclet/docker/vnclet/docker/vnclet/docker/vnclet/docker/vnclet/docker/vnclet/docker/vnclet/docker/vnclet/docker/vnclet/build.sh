#!/usr/bin/env bash
SHELL_FOLDER=$(cd "$(dirname "$0")";pwd)

cp -r ./* docker/vnclet
cd docker/base
docker build -t registry.cn-hangzhou.aliyuncs.com/cloudplus-lab/kubeext-base:v1.0 .
cd ${SHELL_FOLDER}/docker/vnclet
docker build -t registry.cn-hangzhou.aliyuncs.com/cloudplus-lab/kubeext-vnclet:v1.0 .
