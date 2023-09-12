import type { ArticlePreviewResponse } from '../../apis/articlePreview/ArticleService.types';
import {
  ArticlePreviewContainer,
  ArticleMeta,
  AuthorLink,
  AuthorImage,
  Info,
  PublishDate,
  LikeButton,
  HeartIcon,
  ArticleLink,
  ArticleTitle,
  ArticleDescription,
  ReadMore,
  TagList,
  Tag,
} from './ArticlePreview2.styled';

interface ArticlePreview2Props {
  articlePreview: ArticlePreviewResponse;
}

const ArticlePreview = ({
  articlePreview: {
    authorProfileLink,
    authorProfileImageUrl,
    authorName,
    publishDate,
    likeCount,
    articleLink,
    articleTitle,
    articleDescription,
    tags,
  },
}: ArticlePreview2Props) => (
  <ArticlePreviewContainer>
    <ArticleMeta>
      <AuthorLink href={authorProfileLink}>
        <AuthorImage src={authorProfileImageUrl} />
      </AuthorLink>
      <Info>
        <AuthorLink href={authorProfileLink}>{authorName}</AuthorLink>
        <PublishDate>{publishDate}</PublishDate>
      </Info>
      <LikeButton>
        <HeartIcon className="ion-heart"></HeartIcon> {likeCount}
      </LikeButton>
    </ArticleMeta>
    <ArticleLink href={articleLink}>
      <ArticleTitle>{articleTitle}</ArticleTitle>
      <ArticleDescription>{articleDescription}</ArticleDescription>
      <ReadMore>Read more...</ReadMore>
      <TagList>
        {tags.map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagList>
    </ArticleLink>
  </ArticlePreviewContainer>
);

export default ArticlePreview;
