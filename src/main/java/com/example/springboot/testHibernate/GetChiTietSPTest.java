package com.example.springboot.testHibernate;

import com.example.springboot.repositories.ChiTietSPDAO;

public class GetChiTietSPTest {
    public static void main(String[] args) {
        ChiTietSPDAO dao = new ChiTietSPDAO();
        dao.getByID("226D0A2B-20C8-4580-9EF2-7CA062E1629A");
    }
}
