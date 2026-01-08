const prompts = [
  {
    name: 'name',
    type: 'string',
    message: 'Plugin name:',
    required: true
  },
  {
    name: 'description',
    type: 'string',
    message: 'Plugin description:',
    required: false
  },
  {
    name: 'author',
    type: 'string',
    message: 'Plugin author:',
    required: false
  },
  {
    name: 'modules',
    type: 'checkbox',
    message: 'Choose modules you want to develop:',
    choices: ['uploader', 'transformer', 'beforeTransformPlugins', 'beforeUploadPlugins', 'afterUploadPlugins']
  },
  {
    name: 'useIn',
    type: 'list',
    message: 'Your plugin used in GUI or CLI?',
    choices: [
      {
        name: 'GUI & CLI',
        value: 'both',
        short: 'both'
      },
      {
        name: 'Just CLI',
        value: 'cli',
        short: 'cli'
      }
    ]
  },
  {
    name: 'type',
    type: 'list',
    message: 'Use TS or JS?',
    choices: [
      {
        name: 'Yes, use TS Project(recommended)',
        value: 'ts',
        short: 'ts'
      },
      {
        name: 'Yes, use JS Project',
        value: 'js',
        short: 'js'
      }
    ]
  },
  {
    name: 'commands',
    type: 'confirm',
    message: 'Your plugin has some shortcut for GUI?'
  }
]

const filters = {
  "src/index.ts": "type === 'ts'",
  "eslint.config.ts": "type === 'ts'",
  "tsconfig.json": "type === 'ts'",
  "src/index.js": "type === 'js'",
  "eslint.config.js": "type === 'js'"
}

const complete = ({ options, ctx }) => {
  ctx.log.success(`
Generate template files successfully!
Please cd ${options.dest}, and then

npm install

# or

yarn

# or
pnpm install`)
}

module.exports = {
  prompts,
  filters,
  complete
}