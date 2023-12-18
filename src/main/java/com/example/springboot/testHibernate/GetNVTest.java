package com.example.springboot.testHibernate;


import com.example.springboot.repositories.NhanVienDAO;

public class GetNVTest {
    public static void main(String[] args) {
        NhanVienDAO dao = new NhanVienDAO();
        dao.getAll();
        System.out.println("get by id");
        dao.getAll();
    }
}
