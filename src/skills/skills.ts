import { Skill } from './types';

export const protocols: { [key: string]: Skill } = {
  grpc: {
    name: 'gRPC',
    url: 'https://grpc.io/',
  },
  graphql: {
    name: 'GraphQL',
    url: 'https://graphql.org/',
  },
  rest: {
    name: 'REST',
    url: 'https://en.wikipedia.org/wiki/Representational_state_transfer',
  },
};

export const languages = <{ [key: string]: Skill }>{
  ts: {
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
  },
  js: {
    name: 'JavaScript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  go: {
    name: 'Go',
    url: 'https://golang.org/',
  },
  python: {
    name: 'Python',
    url: 'https://www.python.org/',
  },
  dart: {
    name: 'Dart',
    url: 'https://dart.dev/',
  },
};

export const clientFrameworks = <{ [key: string]: Skill }>{
  react: {
    name: 'React',
    url: 'https://reactjs.org/',
  },
  reactNative: {
    name: 'React Native',
    url: 'https://reactnative.dev/',
  },
  angular: {
    name: 'Angular',
    url: 'https://angular.io/',
  },
  vue: {
    name: 'Vue',
    url: 'https://vuejs.org/',
  },
};

export const serverFrameworks = <{ [key: string]: Skill }>{
  node: {
    name: 'Node.js',
    url: 'https://nodejs.org/en/',
  },
  express: {
    name: 'Express',
    url: 'https://expressjs.com/',
  },
  nest: {
    name: 'NestJS',
    url: 'https://nestjs.com/',
  },
  djangoREST: {
    name: 'Django REST Framework',
    url: 'https://www.django-rest-framework.org/',
  },
  apollo: {
    name: 'Apollo Server',
    url: 'https://www.apollographql.com/',
  },
  dotnet: {
    name: '.NET',
    url: 'https://dotnet.microsoft.com/',
  },
};

export const databases = <{ [key: string]: Skill }>{
  postgres: {
    name: 'PostgreSQL',
    url: 'https://www.postgresql.org/',
  },
  mongo: {
    name: 'MongoDB',
    url: 'https://www.mongodb.com/',
  },
  redis: {
    name: 'Redis',
    url: 'https://redis.io/',
  },
  mysql: {
    name: 'MySQL',
    url: 'https://www.mysql.com/',
  },
  mssql: {
    name: 'Microsoft SQL Server',
    url: 'https://www.microsoft.com/en-us/sql-server/sql-server-2019',
  },
};

export const cloudProviders = <{ [key: string]: Skill }>{
  aws: {
    name: 'Amazon Web Services',
    url: 'https://aws.amazon.com/',
  },
  gcp: {
    name: 'Google Cloud Platform',
    url: 'https://cloud.google.com/',
  },
  azure: {
    name: 'Microsoft Azure',
    url: 'https://azure.microsoft.com/en-us/',
  },
};

export const tools: { [key: string]: Skill } = {
  docker: {
    name: 'Docker',
    url: 'https://www.docker.com/',
  },
};

export default <{ [key: string]: Skill }>{
  ...protocols,
  ...languages,
  ...clientFrameworks,
  ...serverFrameworks,
  ...databases,
  ...cloudProviders,
  ...tools,
};
