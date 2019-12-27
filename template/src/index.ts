import picgo from 'picgo'

export = (ctx: picgo) => {
  const register = () => {
<% modules.forEach(item => { -%>
    ctx.helper.<%=item%>.register('<%=name%>', {
      handle (ctx) {
        console.log(ctx)
      }
    })
<% }) -%>
  }
<% if (commands){ -%>
  const commands = (ctx: picgo) => [{
    label: '',
    key: '',
    name: '',
    async handle (ctx: picgo, guiApi: any) {}
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
