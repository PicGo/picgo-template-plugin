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
  return {
<% if (modules.includes('uploader')){ -%>
    uploader: '<%=name%>',
<% } -%>
<% if (modules.includes('transformer')){ -%>
    transformer: '<%=name%>',
<% } -%>
    register
  }
}
