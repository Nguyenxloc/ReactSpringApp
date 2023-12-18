package com.example.springboot.Singleton;

import com.example.springboot.model.KhachHang;

/**
 *
 * @author 84374
 */
public class KhachHangSingleton {

    private static KhachHangSingleton single_instance = null;
    // Declaring a variable of type String
    public KhachHang khachHang;
    private KhachHangSingleton() {
        khachHang = null;
    }
    public static synchronized KhachHangSingleton getInstance() {
        if (single_instance == null) {
            single_instance = new KhachHangSingleton();
        }
        return single_instance;
    }
}

