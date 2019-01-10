const path = require('path')
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
    required: false
  },
  {
    name: 'modules',
    type: 'checkbox',
    message: 'Choose modules you want to develop:',
    choices: ['uploader', 'transformer', 'beforeTransformPlugins', 'beforeUploadPlugins', 'afterUploadPlugins']
  },
  {
    name: 'cli',
    type: 'confirm',
    message: 'Your plugin is just used in CLI?'
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
  }
]

const filters = {
  "src/index.ts": "type === 'ts'",
  "tslint.json": "type === 'ts'",
  "tsconfig.json": "type === 'ts'",
  ".eslint": "type === 'js'",
  "src/index.js": "type === 'js'"
}

const complete = ({ options, ctx }) => {
  ctx.log.success(`
Generate template files successfully!
Please cd ${options.dest}, and then

npm install

# or

yarn`)
}

module.exports = {
  prompts,
  filters,
  complete
}