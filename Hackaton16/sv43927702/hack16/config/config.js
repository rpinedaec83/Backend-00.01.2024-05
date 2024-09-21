module.exports = {
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    oauthClientID: process.env.OAUTH_CLIENT_ID,
    oauthClientSecret: process.env.OAUTH_CLIENT_SECRET,
    databaseUrl: process.env.DATABASE_URL,
    port: process.env.PORT || 3000
};