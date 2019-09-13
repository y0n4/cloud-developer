export const config = {
  "dev": {
    "username": "udagram",
    "password": "RtuFkBuR2TW3E7H",
    "database": "udagram",
    "host": "udagram.crks3fohnav1.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_reigion": "us-east-2",
    "aws_profile": "default",
    "aws_media_bucket": "udagrams3"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": process.env.JWT_SECRET
  }

}
