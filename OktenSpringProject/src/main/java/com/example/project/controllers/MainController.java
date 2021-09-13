package com.example.project.controllers;


import com.example.project.dao.ProductDAO;
import com.example.project.dao.UserDAO;
import com.example.project.mailService.ComporatorInt;
import com.example.project.mailService.MailService;
import com.example.project.models.Product;
import com.example.project.models.User;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;


@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@AllArgsConstructor
public class MainController {

    private UserDAO userDAO;
    private ProductDAO productDAO;
    private MailService mailService;


    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public void register (@RequestBody User user){

        String encode=passwordEncoder.encode(user.getPassword());
        user.setPassword(encode);
        userDAO.save(user);

    }
    @PostMapping("/addproduct")
    public void addproduct (@RequestBody Product product){
        productDAO.save(product);
    }

    @PostMapping("/deleteproduct/{product}")
    public void deleteproduct (@PathVariable int product){
        productDAO.deleteById(product);
    }

//-------------------MailSender------------------//
    @GetMapping("/email/{email}")
    public void sendEmail(@PathVariable String email){
        mailService.send(email);
    }

//    @PostMapping("/addProposition")
//    public void sendProposition(@RequestBody Product product){
//        mailService.send(email);
//    }


//*******************************************//

    @GetMapping("/pomeshkannya")
    public List<Product> getProduct() {
        List<Product> products = productDAO.findAll();
        return products;
        }

    @GetMapping("/users")
    public List<User> getUsers() {
        List<User> users = userDAO.findAll();
        return users;
    }
//-------------------Sorting------------------//
    @GetMapping("/sortCostPlus")
    public List<Product> sortCostPlus(){
        List<Product> products =productDAO.findAll();
        Collections.sort(products, new ComporatorInt());
        return  products;
    }
    @GetMapping("/sortCostMinus")
    public List<Product> sortCostMinus(){
        List<Product> products =productDAO.findAll();
        Collections.sort(products, new ComporatorInt.ComporatorCostMinus());
        return  products;
    }
    @GetMapping("/sortSquarePlus")
    public List<Product> sortSquarePlus(){
        List<Product> products =productDAO.findAll();
        Collections.sort(products, new ComporatorInt.ComporatorSquarePlus());
        return  products;
    }
    @GetMapping("/sortSquareMinus")
    public List<Product> sortSquareMinus(){
        List<Product> products =productDAO.findAll();
        Collections.sort(products, new ComporatorInt.ComporatorSquareMinus());
        return  products;
    }
    @GetMapping("/sortValueOfRoomPlus")
    public List<Product> sortValueOfRoomPlus(){
        List<Product> products =productDAO.findAll();
        Collections.sort(products, new ComporatorInt.ComporatorValuesOfRoomPlus());
        return  products;
    }
    @GetMapping("/sortValueOfRoomMinus")
    public List<Product> sortValueOfRoomMinus(){
        List<Product> products =productDAO.findAll();
        Collections.sort(products, new ComporatorInt.ComporatorValuesOfRoomMinus());
        return  products;
    }

 //*******************************************//
}
