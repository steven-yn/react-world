import styled from '@emotion/styled';

export const ArticlePreviewContainer = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1.5rem 0;

  .preview-link {
    h1 {
      font-weight: 600 !important;
      font-size: 1.5rem !important;
      margin-bottom: 3px;
    }

    p {
      font-weight: 300;
      font-size: 1rem;
      color: #999;
      margin-bottom: 15px;
      line-height: 1.3rem;
    }

    span {
      max-width: 30%;
      font-size: 0.8rem;
      font-weight: 300;
      color: #bbb;
      vertical-align: middle;
    }

    ul {
      float: right;
      max-width: 50%;
      vertical-align: top;

      li {
        font-weight: 300;
        font-size: 0.8rem !important;
        padding-top: 0px !important;
        padding-bottom: 0px !important;
      }
    }
  }
`;

export const ArticleMeta = styled.div`
  display: block;
  position: relative;
  font-weight: 300;
  margin: 0 0 1rem 0;

  img {
    display: inline-block;
    vertical-align: middle;
    height: 32px;
    width: 32px;
    border-radius: 30px;
  }

  .info {
    margin: 0 1.5rem 0 0.3rem;
    display: inline-block;
    vertical-align: middle;
    line-height: 1rem;

    .author {
      display: block;
      font-weight: 500 !important;
    }

    .date {
      color: #bbb;
      font-size: 0.8rem;
      display: block;
    }
  }
`;

export const AuthorImage = styled.img``; // Specific styles were not provided

export const Info = styled.div``; // Specific styles were not provided

export const AuthorLink = styled.a``; // Specific styles were not provided

export const PublishDate = styled.span``; // Specific styles were not provided

export const LikeButton = styled.button``; // Specific styles were not provided

export const HeartIcon = styled.i``; // Specific styles were not provided

export const ArticleLink = styled.a``;

export const ArticleTitle = styled.h1`
  font-weight: 600 !important;
  font-size: 1.5rem !important;
  margin-bottom: 3px;
`;

export const ArticleDescription = styled.p`
  font-weight: 300;
  font-size: 1rem;
  color: #999;
  margin-bottom: 15px;
  line-height: 1.3rem;
`;

export const ReadMore = styled.span`
  max-width: 30%;
  font-size: 0.8rem;
  font-weight: 300;
  color: #bbb;
  vertical-align: middle;
`;

export const TagList = styled.ul`
  float: right;
  max-width: 50%;
  vertical-align: top;
`;

export const Tag = styled.li`
  font-weight: 300;
  font-size: 0.8rem !important;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
`;
