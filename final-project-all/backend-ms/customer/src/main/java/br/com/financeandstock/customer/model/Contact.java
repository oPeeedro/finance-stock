package br.com.financeandstock.customer.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Contact {

    @Id
    private String contactId;
    private String contactName;
    private String contactEmail;
    private String subject;
    private String message;
    private Date createDt;

}
