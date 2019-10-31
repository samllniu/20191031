$(document).ready(function(){
    console.log("Estoy lista para que trabajes");
    getBuscadores();

    $("#save-new").click(function(){
        createBuscador();
    });

    $("#table-browser").on("click", ".edit", function(){
        var row = $(this).closest("tr");
        var botonEdit = row.find(".edit");
        var botonEliminar= row.find(".delete");
        var botonActualizar = row.find(".update");
        var botonCancelar= row.find(".cancel");
        var formNombre= row.find(".form-nombre-label");
        var formVersion= row.find(".form-version-label");
        var formCompany= row.find(".form-company-label");
        var pNombre= row.find(".p-nombre");
        var pVersion= row.find(".p-version");
        var pCompany= row.find(".p-company");

        $(botonEliminar).addClass("d-none");
        $(botonEdit).addClass("d-none");
        $(pNombre).addClass("d-none");
        $(pVersion).addClass("d-none");
        $(pCompany).addClass("d-none");

        $(botonActualizar).removeClass("d-none");
        $(botonCancelar).removeClass("d-none");
        $(formNombre).removeClass("d-none");
        $(formVersion).removeClass("d-none");
        $(formCompany).removeClass("d-none");
    });

    $("#table-browser").on("click", ".update", function(){
        ocultarFormularioEditAndSave(this);
    });

    $("#table-browser").on("click", ".cancel", function(){
        ocultarFormularioEdit(this);
    });

    $("#table-browser").on("click", ".delete", function(){
        deleteBuscador($(this).attr("data-id"));
    });
});

function getBuscadores(){
    var rowBuscador = "";
    $.ajax({
        url: "http://localhost:80/user/getAllUser",
        type: "get",
        success: function(response){
            response.buscadores.forEach(buscador => {
                rowBuscador += createRow(buscador);
            });

            $("tbody").html(rowBuscador);
        }
    });
}

function createBuscador(){
    $.ajax({
        url: "api/Buscadoresweb",
        type: "POST",
        dataType: "json",
        data: {
            nombre: $("#nombre").val(),
            version: $("#version").val(),
            company: $("#company").val()
        },

        error: function(){
            console.log("Hubo un error en la peticion")
        },

        success: function(response){
            if(response.success){
                var row = createRow(response.buscador);
                $("#nombre").val("");
                $("#version").val("");
                $("#company").val("");
                $("tbody").append(row);
            }else{
                console.log(response.message);
            }
        }
    })
};

function deleteBuscador(id){
    $.ajax({
        url: "api/Buscadoresweb/" + id,
        type: "DELETE",
        dataType: "json",

        error: function(){
            console.log("Hubo un error en la peticion")
        },

        success: function(response){
            if(response.success){
                getBuscadores();
            }else{
                console.log(response.message);
            }
        }
    })
};

function createRow (data){
    var row = `<tr>
                    <form class="form">
                    <th scope="row">${data.name}</th>
                    <td>
                        <p class="mb-0 p-nombre">${data.email}</p>
                        <div class="form-group mb-0 d-none form-nombre-label">
                            <label for="nombre" class="sr-only">Password</label>
                            <input type="text" class="form-control form-nombre" name="nombre" placeholder="Nombre" value="${data.nombre}">
                        </div>
                    </td>
                    <td>
                        <p class="mb-0 p-version">${data.phone}</p>
                        <div class="form-group mb-0 d-none form-version-label">
                            <label for="version" class="sr-only">Version Actual</label>
                            <input type="text" class="form-control form-version" name="version" placeholder="Version Actual" value="${data.version}">
                        </div>
                    </td>
                    </form>
                </tr>`

    return row;
}

function ocultarFormularioEdit(data){
    var row = $(data).closest("tr");
    var botonEdit = row.find(".edit");
    var botonEliminar= row.find(".delete");
    var botonActualizar = row.find(".update");
    var botonCancelar= row.find(".cancel");
    var formNombre= row.find(".form-nombre-label");
    var formVersion= row.find(".form-version-label");
    var formCompany= row.find(".form-company-label");
    var pNombre= row.find(".p-nombre");
    var pVersion= row.find(".p-version");
    var pCompany= row.find(".p-company");

    $(botonEliminar).removeClass("d-none");
    $(botonEdit).removeClass("d-none");
    $(pNombre).removeClass("d-none");
    $(pVersion).removeClass("d-none");
    $(pCompany).removeClass("d-none");

    $(botonActualizar).addClass("d-none");
    $(botonCancelar).addClass("d-none");
    $(formNombre).addClass("d-none");
    $(formVersion).addClass("d-none");
    $(formCompany).addClass("d-none");
};

function ocultarFormularioEditAndSave(data){
    var row = $(data).closest("tr");
    var formNombre= row.find(".form-nombre");
    var formVersion= row.find(".form-version");
    var formCompany= row.find(".form-company");
    
    $.ajax({
        url: "api/Buscadoresweb/" + $(data).attr("data-id"),
        type: "PUT",
        dataType: "json",
        data: 
            {
                nombre: $(formNombre).val(),
                version: $(formVersion).val(),
                company: $(formCompany).val()
            },

        error: function(){
            console.log("Hubo un error en la peticion")
        },

        success: function(response){
            if(response.success){
                getBuscadores();
            }else{
                console.log(response.message);
            }
        }
    });

};