package entities;

public class Product {
	
	private String Name;
	private Double price;
	
	public Product() {
		
	}

	public Product(String name, Double price) {
		super();
		Name = name;
		this.price = price;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}


	
}
