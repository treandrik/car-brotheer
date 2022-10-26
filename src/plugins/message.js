//Для получения текста из messages.js в верстке компонента достаточно вызвать {{ $message("key") }}
export default {
    install: (app, options) => {
        app.config.globalProperties.$message = key => {
            return options[key]
            //Этот код пригодится если мы будем вводить вложенность ключей в объекте messages.js
            // return key.split('.').reduce((o, i) => {
            //     if (o) return o[i]
            // }, options)
        }
    }
}