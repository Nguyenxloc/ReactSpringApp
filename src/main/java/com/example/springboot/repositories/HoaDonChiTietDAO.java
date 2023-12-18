package com.example.springboot.repositories;

import com.example.springboot.model.ChiTietSP;
import com.example.springboot.model.HoaDon;
import com.example.springboot.model.HoaDonChiTiet;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import java.util.ArrayList;

public class HoaDonChiTietDAO {
//    SessionFactory factory = HibernateUtil.getFACTORY();
    Transaction tx = null;

    public void add(HoaDon hoaDon, ChiTietSP chiTietSP, int soluong, double donGia) {
        HoaDonChiTiet hoaDonChiTiet = new HoaDonChiTiet(hoaDon,chiTietSP, soluong, donGia);
        try {
            org.hibernate.cfg.Configuration cfg = new org.hibernate.cfg.Configuration();
            cfg.configure("hibernate.cfg.xml");
            SessionFactory factory =cfg.buildSessionFactory();
            Session session = factory.openSession();
            tx = session.beginTransaction();
            session.save(hoaDonChiTiet);
            tx.commit();
            System.out.println("add success !");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public ArrayList<HoaDonChiTiet> getAll() {
        org.hibernate.cfg.Configuration cfg = new org.hibernate.cfg.Configuration();
        cfg.configure("hibernate.cfg.xml");
        SessionFactory factory =cfg.buildSessionFactory();
        ArrayList<HoaDonChiTiet> lstHoaDonChiTiets = new ArrayList<>();
        Session session = factory.openSession();
        tx = session.beginTransaction();
        try {
            lstHoaDonChiTiets = (ArrayList<HoaDonChiTiet>) session.createQuery("from HoaDon").list();
            System.out.println(lstHoaDonChiTiets);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return lstHoaDonChiTiets;
    }

    public HoaDonChiTiet getByID(String id) {
        org.hibernate.cfg.Configuration cfg = new org.hibernate.cfg.Configuration();
        cfg.configure("hibernate.cfg.xml");
        SessionFactory factory =cfg.buildSessionFactory();
        HoaDonChiTiet hoaDonChiTiet = new HoaDonChiTiet();
        try {
            Session session = factory.openSession();
            tx = session.beginTransaction();
            hoaDonChiTiet = session.get(HoaDonChiTiet.class, id);
            System.out.println(hoaDonChiTiet);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return hoaDonChiTiet;
    }

    public ArrayList<HoaDonChiTiet> getAllByIdHoaDon(String idHoaDon) {
        org.hibernate.cfg.Configuration cfg = new org.hibernate.cfg.Configuration();
        cfg.configure("hibernate.cfg.xml");
        SessionFactory factory =cfg.buildSessionFactory();
        ArrayList<HoaDonChiTiet> lstHoaDonChiTiets = new ArrayList<>();
        try {
            Session session = factory.openSession();
            tx = session.beginTransaction();
            lstHoaDonChiTiets = (ArrayList<HoaDonChiTiet>) session.createQuery("from HoaDonChiTiet hdct where hdct.hoaDon.idHoaDon =:idHoaDon").setParameter("idHoaDon",idHoaDon).list();
            System.out.println(lstHoaDonChiTiets);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return lstHoaDonChiTiets;
    }
}
