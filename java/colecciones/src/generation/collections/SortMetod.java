package generation.collections;

import java.util.ArrayList;
import java.util.Collections;

public class SortMetod {
	public static void main(String[] args){
	//El método .sort() permite ordenar los eleementos de un ArrayList
	ArrayList<Integer> points = new ArrayList<Integer>();
	ArrayList<String> names = new ArrayList<String>();

	points.add(5);
	points.add(7);
	points.add(6);
	points.add(10);
	points.add(9);
	
	System.out.println(points); //No se encuentran ordenados de menor a mayor, solamente como en la lista
	
	//Ordenamiento con sort
	Collections.sort(points);
	System.out.println(points); //Ordenados de menor a mayor
	
	names.add("Daniel");
	names.add("Rocio");
	names.add("Arturo");
	names.add("Eveida");
	names.add("fernanda");
	names.add("angel");
	System.out.println(names);
	Collections.sort(names);
	System.out.println(names); //Toma en cuenta el ordenamiento  con base en a tabla ASCII
	}
}
