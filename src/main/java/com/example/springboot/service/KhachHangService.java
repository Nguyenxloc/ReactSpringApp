package com.example.springboot.service;
import com.example.springboot.model.KhachHang;
import com.example.springboot.repositories.KhachHangDAO;

import java.util.ArrayList;

public class KhachHangService {
    KhachHangDAO khachHangDAO = new KhachHangDAO();
    public ArrayList<KhachHang> getAll() {
        return khachHangDAO.getLstKhachHang();
    }
}
