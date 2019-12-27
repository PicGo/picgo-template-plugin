module.exports = (ctx) => {
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
  const commands = (ctx) => [{
    label: '',
    key: '',
    name: '',
    async handle (ctx, guiApi) {}
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
