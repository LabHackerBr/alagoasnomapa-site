import { publish } from 'gh-pages'

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/LabHackerSP/alagoasnomapa-site.git', // Update to point to your repository
  user: {
   name: 'Eduardo Liron', // update to use your name
   email: 'eduardoliron@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);