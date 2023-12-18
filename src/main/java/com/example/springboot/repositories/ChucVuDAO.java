package com.example.springboot.repositories;

import com.example.springboot.model.ChucVu;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import java.util.ArrayList;

public class ChucVuDAO {
//    private SessionFactory factory = HibernateUtil.getFACTORY();
    public void addChucVu(String id, String ma, String ten){
        org.hibernate.cfg.Configuration cfg = new org.hibernate.cfg.Configuration();
        cfg.configure("hibernate.cfg.xml");
        SessionFactory factory =cfg.buildSessionFactory();
        Session session = factory.openSession();
        Transaction tx = null;
        try {
          //  Block of code to try
            tx = session.beginTransaction();
            ChucVu chucVu = new ChucVu(null,ma,ten);
            session.save(chucVu);
            tx.commit();
            System.out.println("add success!");
        }
        catch(Exception e) {
          e.printStackTrace();
        }
    }
    public ArrayList<ChucVu> getLstChucVu(){
        org.hibernate.cfg.Configuration cfg = new org.hibernate.cfg.Configuration();
        cfg.configure("hibernate.cfg.xml");
        SessionFactory factory =cfg.buildSessionFactory();
        Session session = factory.openSession();
        Transaction tx = null;
        ArrayList<ChucVu> lstChucVus = new ArrayList<>();
        try {
            tx = session.beginTransaction();
            lstChucVus = (ArrayList<ChucVu>) session.createQuery("from ChucVu").list();
            tx.commit();
            System.out.println(lstChucVus);
        }
        catch(Exception e) {
          //  Block of code to handle errors
            e.printStackTrace();
        }
        return lstChucVus;
    }

    public ChucVu getByID(String id){
        org.hibernate.cfg.Configuration cfg = new org.hibernate.cfg.Configuration();
        cfg.configure("hibernate.cfg.xml");
        SessionFactory factory =cfg.buildSessionFactory();
        Session session = factory.openSession();
        Transaction tx = null;
        ChucVu  chucVu = new ChucVu();
        try {
            chucVu  = session.get(ChucVu.class,id);
            System.out.println(chucVu.toString());
        }
        catch(Exception e) {
            e.printStackTrace();
        }
        return  chucVu;
    }

    public void deleteChucVu(ChucVu chucVu) {
        try {
            org.hibernate.cfg.Configuration cfg = new org.hibernate.cfg.Configuration();
            cfg.configure("hibernate.cfg.xml");
            SessionFactory factory =cfg.buildSessionFactory();
            Session session = factory.openSession();
            Transaction tx = null;
            tx = session.beginTransaction();
            session.delete(chucVu);
            tx.commit();
        }
        catch(Exception e) {
            e.printStackTrace();
        }
    }
}
