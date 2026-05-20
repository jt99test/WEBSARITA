type LegacyRedirect = {
  source: string;
  destination: string;
  statusCode: 301;
};

export const legacyRedirects: LegacyRedirect[] = [
  {
    source: "/info",
    destination: "/it/about",
    statusCode: 301,
  },
  {
    source: "/coaching",
    destination: "/it/coaching",
    statusCode: 301,
  },
  {
    source: "/retirosyogayastrologia",
    destination: "/es/coaching",
    statusCode: 301,
  },
  {
    source: "/retreats",
    destination: "/en/coaching",
    statusCode: 301,
  },
  {
    source: "/it/retreats",
    destination: "/it/coaching",
    statusCode: 301,
  },
  {
    source: "/es/retreats",
    destination: "/es/coaching",
    statusCode: 301,
  },
  {
    source: "/en/retreats",
    destination: "/en/coaching",
    statusCode: 301,
  },
  {
    source: "/training",
    destination: "/it/training",
    statusCode: 301,
  },
  {
    source: "/book",
    destination: "/it/booking",
    statusCode: 301,
  },
  {
    source: "/booking",
    destination: "/it/booking",
    statusCode: 301,
  },
];
