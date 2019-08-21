module.exports = (plop) => {
    plop.addHelper('upperCase', (string) => string.toUpperCase());
    plop.addHelper('lowerCaseFirst', (string) => string.charAt(0).toLowerCase() + string.slice(1));
    plop.addHelper('upperCaseFirst', (string) => string.charAt(0).toUpperCase() + string.slice(1));
    plop.addHelper('slugify', (string) => {
        let slug = string.replace(/([A-Z])/g, '-$1');

        if (slug[0] === '-') {
            slug = slug.substr(1);
        }

        return slug.toLowerCase();
    });

    plop.setGenerator('component', {
      description: 'Create a new Component',
      // Get inputs from the user.
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is your component name?'
        }
      ],
      actions: [
        // Add a new Component Svelte and Css boilerplates.
        {
          type: 'add',
          path: 'src/js/components/{{ upperCaseFirst name }}/index.svelte',
          templateFile: 'plop-templates/component-svelte.txt'
        },
      ]
    });

    plop.setGenerator('page', {
      description: 'Create a new Page',
      // Get inputs from the user.
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is your page name?'
        }
      ],
      actions: [
        // Add a new Page Svelte and Css boilerplates.
        {
          type: 'add',
          path: `src/js/pages/{{ upperCaseFirst name }}/index.svelte`,
          templateFile: 'plop-templates/component-svelte.txt'
        },
      ]
    });
  }