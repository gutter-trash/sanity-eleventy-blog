export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62024b6e750fcc8cc6c6bdae',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-gvbsxdcr',
                  apiId: 'feb03f5f-8f22-4e9a-84f3-10e1c02c8d8f'
                },
                {
                  buildHookId: '62024b6e5e84e19ff9192ec9',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-d5ikzom7',
                  apiId: 'c346b49e-4177-4949-9a5c-cb429e7b5d27'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gutter-trash/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-d5ikzom7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
