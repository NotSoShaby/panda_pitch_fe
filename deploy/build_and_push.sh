

$(aws ecr get-login --region us-east-2 --no-include-email)
docker build -t 687685460366.dkr.ecr.us-east-2.amazonaws.com/abbey ..
docker push 687685460366.dkr.ecr.us-east-2.amazonaws.com/abbey