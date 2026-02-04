export type MetadataSource = {
  url: string;
  html: string;
};

export type MetadataExtractionResult = {
  titleCandidates: string[];
  publishedAt?: string;
  mainTopics: string[];
  warnings: string[];
};

export type MetadataExtractionRules = {
  titlePrioritySelectors: string[];
  publishedAtSelectors: string[];
  topicSelectors: string[];
  fallbackTitleSelectors: string[];
  topicLimit: number;
};

export const defaultExtractionRules: MetadataExtractionRules = {
  titlePrioritySelectors: [
    'meta[property="og:title"]',
    'meta[name="twitter:title"]',
    'meta[name="title"]',
    'h1',
  ],
  publishedAtSelectors: [
    'meta[property="article:published_time"]',
    'meta[name="pubdate"]',
    'meta[name="publish-date"]',
    'time[datetime]',
  ],
  topicSelectors: [
    'meta[property="article:tag"]',
    'meta[name="keywords"]',
    '[data-topic]',
    '.tag',
  ],
  fallbackTitleSelectors: ['title', 'h2'],
  topicLimit: 5,
};

export type MetadataExtractor = (
  source: MetadataSource,
  rules?: MetadataExtractionRules,
) => MetadataExtractionResult;

export const extractMetadata: MetadataExtractor = (source, rules = defaultExtractionRules) => {
  return {
    titleCandidates: [],
    publishedAt: undefined,
    mainTopics: [],
    warnings: [
      'Metadata extraction not implemented yet. Use this module to implement extraction logic.',
      `Source URL: ${source.url}`,
      `Rules: ${JSON.stringify(rules)}`,
    ],
  };
};
