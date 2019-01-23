import React from 'react'
import styled from 'styled-components'

import { SubTitle, SubSubTitle } from '../components/style/Title'
import { Text } from '../components/style/Text'
import { Button } from '../components/style/Button'

import hugoGentooTheme from '../static/image/img-hugo-gentoo-theme.png'
import hugoMinimage from '../static/image/img-hugo-minimage.png'
import mealselect from '../static/image/img-mealselect.png'

const portfolios = [
  {
    title: 'MealSelect',
    description:
      '「今日のごはんどうしよう」を考える時に助けてくれるWebアプリ。',
    link: 'https://mealselect.daisukekonishi.com',
    file: mealselect,
    tags: ['React', 'Django']
  },
  {
    title: 'minimage',
    description:
      'Hugoのテンプレートテーマ。サムネイルやグローバルナビなどの設定ができるのが特徴です。',
    link: 'https://github.com/d-kusk/minimage',
    file: hugoMinimage,
    tags: ['Hugo']
  },
  {
    title: 'hugo-gentoo-theme',
    description:
      'Hugoのテンプレートテーマです。初めて公式テーマリポジトリに申請したテーマで、JSON-LDやGoogle Analyticsのコード生成ができるのが特徴です。',
    link: 'https://github.com/d-kusk/hugo-gentoo-theme',
    file: hugoGentooTheme,
    tags: ['Hugo']
  }
]

const Portfolio = props => {
  return (
    <PortfolioArea>
      <div className="header">
        <SubTitle>Works</SubTitle>
        <Text>個人的に制作したものの一部です。</Text>
      </div>

      <div className="body">
        <WorksList>
          {portfolios.map((portfolio, index) => {
            return (
              <WorksListItem key={index}>
                <PortfolioItem model={portfolio} />
              </WorksListItem>
            )
          })}
        </WorksList>
      </div>
      <div className="footer">
        <Button href={'https://github.com/d-kusk'} blank>
          Githubへ
        </Button>
      </div>
    </PortfolioArea>
  )
}

const PortfolioItem = props => {
  const model = props.model
  return (
    <PortfolioCard>
      <a href={model.link} target={'_blank'} rel="noopener noreferrer">
        <div
          className="image"
          style={{ backgroundImage: `url(${model.file})` }}
        />
        <div className="content">
          <div className="content-header">
            <SubSubTitle>{model.title}</SubSubTitle>
            <Tags>
              {model.tags.map((tag, index) => {
                return (
                  <div className="tag" key={index}>
                    {tag}
                  </div>
                )
              })}
            </Tags>
          </div>
          <div className="content-body">
            <Text>{model.description}</Text>
          </div>
        </div>
      </a>
    </PortfolioCard>
  )
}

export { Portfolio }

const PortfolioArea = styled.div`
  .header {
    text-align: center;

    h2 {
      font-size: 3em;
    }
  }

  .body {
    width: 100%;
    margin-top: 2rem;

    @media (min-width: 768px) {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
  }
`

const WorksList = styled.ul`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  list-style-type: none;
  padding-left: 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const WorksListItem = styled.li`
  display: flex;
  width: 28%;
  margin: 2%;
  border: 1px solid #d6d6d6;
  border-radius: 3px;

  @media (max-width: 768px) {
    width: 96%;
    margin: 4% 2%;
  }
`

const PortfolioCard = styled.div`
  position: relative;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.2);

  a {
    display: block;

    &:hover {
      text-decoration: none;
    }
  }

  .image {
    width: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    &::after {
      content: '';
      display: block;
      padding-top: 60%;
    }
  }

  .content {
    width: 100%;
    align-items: center;
    padding: 1em;

    p {
      margin-bottom: 0;
    }
  }

  .content-header {
    h3 {
      margin-bottom: 0;
    }
    & + * {
      margin-top: 0.6em;
    }
  }
`

const Tags = styled.div`
  .tag,
  &::before {
    display: inline-block;
    vertical-align: middle;
  }

  .tag {
    font-size: 0.9em;
    color: #7b7b7b;

    &::before {
      content: '#';
    }

    & + .tag {
      margin-left: 0.5em;
    }
  }
`
