export default class Marketing{
    update({id, userName}){
        // importante lembrar que o [update] é responsavel por gerenciar seus erros/exceptions
        // não deve se ter await no notify porque a responsabilidade do notigy é só emitir eventos
        // só notificar todo mundo 
        console.log(`[${id}] : [marketing] will send to welcome email to ${userName}`)
    }
}