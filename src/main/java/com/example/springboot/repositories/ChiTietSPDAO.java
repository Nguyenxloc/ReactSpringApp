package com.example.springboot.repositories;

import com.example.springboot.model.*;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import java.util.ArrayList;
import java.util.List;

public class ChiTietSPDAO {
//    private SessionFactory factory = HibernateUtil.getFACTORY();
    Transaction tx = null;
    DongSPDAO  dongSPDAO = new DongSPDAO();
    public void addChiTietSP(String id, SanPham sp, NSX nsx, MauSac mauSac, DongSP dongSP, int namBH, String mota, int soLuongTon, double giaNhap, double giaBan, String link1,String link2,String link3) {
        org.hibernate.cfg.Configuration cfg = new org.hibernate.cfg.Configuration();
        cfg.configure("hibernate.cfg.xml");
        SessionFactory factory =cfg.buildSessionFactory();
        Session session = factory.openSession();
        Transaction tx = null;
        ChiTietSP chiTietSP = new ChiTietSP(id, sp, nsx, mauSac, dongSP, namBH, mota, soLuongTon, giaNhap, giaBan,link1,link2,link3);
        try {
            tx = session.beginTransaction();
            session.save(chiTietSP);
            tx.commit();
            System.out.println("add success !");
        } catch (Exception e) {
            e.printStackTrace();
            //  Block of code to handle errors
        }
    }

    public ArrayList<ChiTietSP> getLst() {
        org.hibernate.cfg.Configuration cfg = new org.hibernate.cfg.Configuration();
        cfg.configure("hibernate.cfg.xml");
        SessionFactory factory =cfg.buildSessionFactory();
        Session session = factory.openSession();
        tx = session.beginTransaction();
        ArrayList<ChiTietSP> lstChiTietSp = new ArrayList<>();
        try {
            lstChiTietSp = (ArrayList<ChiTietSP>) session.createQuery("from ChiTietSP").list();
            System.out.println(lstChiTietSp);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return lstChiTietSp;
    }

    public ChiTietSP getByID(String id) {
        org.hibernate.cfg.Configuration cfg = new org.hibernate.cfg.Configuration();
        cfg.configure("hibernate.cfg.xml");
        SessionFactory factory =cfg.buildSessionFactory();
        ChiTietSP chiTietSP = new ChiTietSP();
        try {
            Session session = factory.openSession();
            tx = session.beginTransaction();
            chiTietSP = session.get(ChiTietSP.class, id);
            System.out.println(chiTietSP);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return chiTietSP;
    }

    public void update(ChiTietSP chiTietSP) {
        org.hibernate.cfg.Configuration cfg = new org.hibernate.cfg.Configuration();
        cfg.configure("hibernate.cfg.xml");
        SessionFactory factory =cfg.buildSessionFactory();
        try {
            Session session = factory.openSession();
            tx = session.beginTransaction();
            session.saveOrUpdate(chiTietSP);
            tx.commit();
            System.out.println("udpate success !");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void delete(ChiTietSP chiTietSP) {
        org.hibernate.cfg.Configuration cfg = new org.hibernate.cfg.Configuration();
        cfg.configure("hibernate.cfg.xml");
        SessionFactory factory =cfg.buildSessionFactory();
        try {
            Session session = factory.openSession();
            tx = session.beginTransaction();
            session.delete(chiTietSP);
            tx.commit();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public ArrayList<ChiTietSP> getByIdLoaiSP(String idDongSP) {
        ArrayList<ChiTietSP> lstCTSP = new ArrayList<>();
        DongSP dongSP = new DongSP();
        dongSP = dongSPDAO.getById(idDongSP);
        try {
            org.hibernate.cfg.Configuration cfg = new org.hibernate.cfg.Configuration();
            cfg.configure("hibernate.cfg.xml");
            SessionFactory factory = cfg.buildSessionFactory();
            Session session = factory.openSession();
            tx = session.beginTransaction();

            String hql = "FROM ChiTietSP ctsp WHERE ctsp.dongSP = :dongsp ORDER BY idChiTietSP ";
            Query query = session.createQuery(hql);
            query.setParameter("dongsp",dongSP);
            lstCTSP = (ArrayList<ChiTietSP>) query.setMaxResults(6).list();
            tx.commit();
            System.out.println("get 6 product related succed");
        } catch (Exception e) {
            e.printStackTrace();
        }
        return lstCTSP;
    }
}
