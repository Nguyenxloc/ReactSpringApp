package com.example.springboot.Singleton;

import com.example.springboot.model.HoaDon;

/**
 *
 * @author 84374
 */
public class HoaDonSingleton {

    private static HoaDonSingleton single_instance = null;
    // Declaring a variable of type String
    public HoaDon hoaDon;
    private HoaDonSingleton() {
        hoaDon = null;
    }
    public static synchronized HoaDonSingleton getInstance() {
        if (single_instance == null) {
            single_instance = new HoaDonSingleton();
        }
        return single_instance;
    }
}

