package entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class Contract {

	private Integer number;
	private LocalDate date;
	private Double totalvalue;
	
	private List<Installment> installments = new ArrayList<>();
	
	public Contract() {
		
	}

	public Contract(Integer number, LocalDate date, Double totalvalue) {		
		this.number = number;
		this.date = date;
		this.totalvalue = totalvalue;
	}

	public Integer getNumber() {
		return number;
	}

	public void setNumber(Integer number) {
		this.number = number;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public Double getTotalvalue() {
		return totalvalue;
	}

	public void setTotalvalue(Double totalvalue) {
		this.totalvalue = totalvalue;
	}

	public List<Installment> getInstallments() {
		return installments;
	}
	
}
