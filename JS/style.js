
$("#nome_cartao").on("input keypress", function() {

  let entrada = event.target.value;
  let teclado = event.keyCode;


  $("#card-nome").text(entrada);

  if(!/^[a-zA-Z\s]*$/.test(entrada)){ 
    $("#card-nome").css("color", "red");
    $(this).val(entrada.slice(0, -1));
    entrada = entrada.slice(0, -1);
    $("#card-nome").text(entrada);
    $(this).css("border", "1px solid red");
    $(this).css("outline", "2px solid red");
  }else{
    $("#card-nome").css("color", "");
    $(this).css("border", "");
    $(this).css("outline", "");
  }

  let tamanhopx = $("#card-nome").width();
  let tamanhowindo = $(window).width();
  let tamanho = (tamanhopx/tamanhowindo)*100;

  if(tamanho >= 18){
    $("#card-nome").css("width", `${tamanho}vw`);
    $("#card-nome").css("overflow", "hidden");
    $("#card-nome").css("text-overflow", "ellipsis");
  }else{
    $("#card-nome").css("width", "");
    $("#card-nome").css("overflow", "visible");
  }

  if(entrada.length == 0){
    $("#card-nome").text("NOME DO CARTAO");
  }

});


let verify = 0;
$("#numero_cartao").on("input keypress", function() {
  let entrada = event.target.value; // Remove espaços em branco
  let espaco = entrada.match(/\d{1,4}/g); // Divide a entrada em grupos de 4 dígitos

  if(!/^[0-9\s]*$/.test(entrada)){ // Verifica se a entrada contém apenas dígitos
    $("#card-numero").css("color", "red");
    $("#numero_cartao").val(entrada.slice(0, -1)); // Remove caracteres não numéricos
    entrada = entrada.slice(0, -1);
    $("#card-numero").text(entrada);
    $(this).css("border", "1px solid red");
    $(this).css("outline", "2px solid red");
  }else{
    $("#card-numero").css("color", "");
    $(this).css("border", "");
    $(this).css("outline", "");
  }

  if (espaco) {
    entrada = espaco.join(' '); // Adiciona espaços entre os grupos de 4 dígitos
  }
  
  if(entrada.length >= 20){
    event.preventDefault();
  }else{
    $("#numero_cartao").val(entrada); // Atualiza o valor do input
    $("#card-numero").text(entrada); // Atualiza o texto exibido
  }

  if(entrada.length == 0){
    $("#card-numero").text("0000 0000 0000 0000");
  }
});




$("#validade").on("input keypress", function() {

  let entrada = event.target.value;
  let teclado = event.keyCode;
  let verify = entrada.match(/\d{1,2}/g);


  $("#card-validade").text(entrada);
  if(!/^[0-9-/]*$/.test(entrada)){ 
    $("#card-validade").css("color", "red");
    $(this).val(entrada.slice(0, -1));
    entrada = entrada.slice(0, -1);
    $("#card-validade").text(entrada);
    $(this).css("border", "1px solid red");
    $(this).css("outline", "2px solid red");
  }else{
    $("#card-validade").css("color", "");
    $(this).css("border", "");
    $(this).css("outline", "");
  }

  if(verify){
    entrada = verify.join("/");
    $("#validade").val(entrada);
    if(verify[1] && verify[1].length === 2){
        event.preventDefault();
    }
  }

  if(entrada.length == 0){
    $("#card-validade").text("00/00");
  }

});

$("#cvv").on("input keypress", function() {

  let entrada = event.target.value;
  let teclado = event.keyCode;

  if(entrada.length >= 3){
    event.preventDefault();
  }
  $("#card-cvv").text(entrada);

  if(!/^[0-9]*$/.test(entrada)){ 
    $("#card-cvv").css("color", "red");
    $(this).val(entrada.slice(0, -1));
    entrada = entrada.slice(0, -1);
    $("#card-cvv").text(entrada);
    $(this).css("border", "1px solid red");
    $(this).css("outline", "2px solid red");
  }else{
    $("#card-cvv").css("color", "");
    $(this).css("border", "");
    $(this).css("outline", "");
  }


  if(entrada.length == 0){
    $("#card-cvv").text("000");
  }

});

$("#enviarDados").on("click", function(){
  let inputs = $("input");
  let labels = $("label");
  let confirmado = 0;

  for(i=0; i<inputs.length; i++){
    if(inputs[i].value === ""){
      $(".alertas").eq(i).css("display", "block")
    }else{
      $(".alertas").eq(i).css("display", "none")
      confirmado+=1;
    }
  }
  if(confirmado >= 4){
    $(inputs).css("display", "none");
    $(labels).css("display", "none");
    $("#completo").css("display", "grid");
  }
});
