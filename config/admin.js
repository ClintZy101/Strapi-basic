module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'aabfb924dc7ce14a9fc991384d6a9d69'),
  },
});
