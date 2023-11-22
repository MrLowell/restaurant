import { Component } from '@angular/core';
import { Dish1 } from '../../interfaces/dish1.constant';


@Component({
  selector: 'app-formulario-platillo',
  templateUrl: './formulario-platillo.component.html',
  styles: [
  ]
})
export class FormularioPlatilloComponent {

 dish: Dish1 ={
    name: '',
    imgUrl: null,
    category: 'Elige una categoria',
    price: 0
 }



  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.previewImage(file);
  }

  previewImage(file: File) {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      this.dish.imgUrl = reader.result;
      this.uploadImage()
    };

  }

  uploadImage() {
    // Aquí puedes agregar lógica para subir la imagen al servidor si es necesario
    if(this.dish.imgUrl)
      console.log('hola mundo');

      //console.log(this.dish.imgUrl.toString().split(',')[1]);
  }
onSubmit() {
console.log(this.dish);

}

}
