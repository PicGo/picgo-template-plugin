import type { PicGo, ICommandItem } from 'picgo'

export = (ctx: PicGo) => {
  const register = (): void => {
<% modules.forEach(item => { -%>
    ctx.helper.<%=item%>.register('<%=name%>', {
      handle (ctx) {
        console.log(ctx)
      }
    })
<% }) -%>
  }
<% if (commands){ -%>
  const commands = (ctx: PicGo): ICommandItem[] => [{
    label: '',
    key: '',
    name: '',
    async handle (ctx: PicGo, _guiApi: unknown) {
      console.log(ctx)
    }
  }]
<% } -%>
  return {
<% if (modules.includes('uploader')){ -%>
    uploader: '<%=name%>',
<% } -%>
<% if (modules.includes('transformer')){ -%>
    transformer: '<%=name%>',
<% } -%>
<% if (commands){ -%>
    commands,
<% } -%>
    register
  }
}
