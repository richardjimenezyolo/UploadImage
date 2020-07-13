class UploadImage {

    constructor({api, config}) {
        this.api = api;
        this.config = config
        this.server = config.server
    }

    static get toolbox() {
        return {
            title: 'Upload',
            icon: '<i class="material-icons">photo</i>'
        }
    }

    render() {
        this.add_photo()

        return document.createElement("a")
    }

    save(blockContent) {
        return {
            done: "yes"
        }
    }

    add_photo() {
        var input = document.querySelector("#img")

        input.onchange = () => {

            const form = document.querySelector("#img-form")
            const data = new FormData(form)

            var xhr = new XMLHttpRequest();

            xhr.open("POST", `${this.server}/upload_img`, true)
            xhr.send(data)
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var response = xhr.response;
                    
                    this.api.blocks.insert("image", {"url": `${this.server}/static/${response}`})
                    
                }
            }
        }

        input.click()
    }
}