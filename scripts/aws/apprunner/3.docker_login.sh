docker run --rm -it -v /home/ec2-user/environment/simple-blog/.aws:/root/.aws amazon/aws-cli ecr get-login-password | docker login --username AWS --password-stdin {aws_account_id}.dkr.ecr.{region}.amazonaws.com