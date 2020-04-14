const dev = {
  STRIPE_KEY: "pk_test_yhovc2LFJsCqzPdfX3LZDgip0050Np4Tut",

  s3: {
    REGION: "eu-central-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-9ulky4r4vjw5"
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://dev.api.dobrastronka.pl/notes"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_gp1enTySO",
    APP_CLIENT_ID: "5m52si9gmr2mi53k69coocb8r2",
    IDENTITY_POOL_ID: "eu-central-1:625ba83e-69c7-4135-a058-16d16f0e5ea8"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_yhovc2LFJsCqzPdfX3LZDgip0050Np4Tut",

  s3: {
    REGION: "eu-central-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1kmjmlbumj56q"
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://api.dobrastronka.pl/notes"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_VYUfffQ1y",
    APP_CLIENT_ID: "7fa4lpere4ntu5e4mfoh1439sl",
    IDENTITY_POOL_ID: "eu-central-1:e7c07e2c-c1f9-430c-89d1-811f2172dca4"
  }
};

const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
