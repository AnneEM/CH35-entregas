package generation.collections;

import java.util.Arrays;
import java.util.HashSet;

public class HashSetCollection {
public static void main (String[] args){
	//Hashset es una clase de Collections donde cada elemento es único, es decir, no repiten los elementos
	
	HashSet<String> animals = new HashSet<String>();
	animals.add("Gato");
	animals.add("Serpiente");
	animals.add("Buho");
	animals.add("Caballo");
	animals.add("Conejo");
	animals.add("Mapache");
	animals.add("Mapache");
	animals.add("Capibara");
	animals.add("Zebra");
	
	//Imprimir el HashSet
	System.out.println(animals);
	
	//Conocer si un elemento se encuentra dentro del ser metodo contains();  Y es de tipo booleano
	System.out.println(animals.contains("Capibara")); 
	
	//Eliminar un elemento con remove();
	animals.remove("Zebra");
	System.out.println(animals); 
	
	//Agregamos elementos en una sola linea
	animals.addAll(Arrays.asList("Pato","Tepezcuintle"));
	System.out.println(animals); 
	
	/*
	 *La clase HashSet no va a garantizar que los elementos se muestren segun el orden establecido, ya que busca eficientar la búsqueda y recuperación de los elementos.
	 *Utiliza Tablas Hash para almacenar los elementos y mostrarlos al usuario 
	 */
	
	
	//Limiar el Hashser: .clear();
	animals.clear();
	System.out.println(animals);
	
    }
}
