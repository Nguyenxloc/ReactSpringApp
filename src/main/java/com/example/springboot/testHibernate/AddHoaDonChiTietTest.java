package com.example.springboot.testHibernate;

import com.example.springboot.model.ChiTietSP;
import com.example.springboot.model.HoaDon;
import com.example.springboot.repositories.ChiTietSPDAO;
import com.example.springboot.repositories.HoaDonChiTietDAO;
import com.example.springboot.repositories.HoaDonDAO;

public class AddHoaDonChiTietTest {
    public static void main(String[] args) {
        HoaDonChiTietDAO hoaDonChiTietDAO = new HoaDonChiTietDAO();
        HoaDonDAO hoaDonDAO = new HoaDonDAO();
        ChiTietSPDAO chiTietSPDAO = new ChiTietSPDAO();
        HoaDon hoaDon = hoaDonDAO.getByID("76D0E28D-D3C2-46F8-962A-2DE3D0EAFEFF");
        ChiTietSP chiTietSP = chiTietSPDAO.getByID("226D0A2B-20C8-4580-9EF2-7CA062E1629A");
        hoaDonChiTietDAO.add(hoaDon,chiTietSP,1,1000.5);
    }
}
