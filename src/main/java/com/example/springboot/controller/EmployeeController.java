package com.example.springboot.controller;
import com.example.springboot.model.NhanVien;
import com.example.springboot.service.NhanVienService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.json.JsonObject;
import java.util.ArrayList;

@RestController
@RequestMapping("/employee")
public class EmployeeController {
    private NhanVienService nhanVienService = new NhanVienService();
    @CrossOrigin
    @GetMapping("/getAll")
    public ResponseEntity<ArrayList<NhanVien>> getAllNhanVien() {
        ArrayList<NhanVien> lstNhanViens = new ArrayList<>();
        lstNhanViens = nhanVienService.getAllNhanVien();
        return ResponseEntity.ok(lstNhanViens);
    }
    @GetMapping("/{id}")
    public NhanVien getNhanVienByID(String id) {
        return nhanVienService.getByIDNhanVien(id);
    }
    @PostMapping
    public void createClient(NhanVien nhanVien) {
        nhanVienService.saveNhanVien(nhanVien);
    }
    @PutMapping("/{id}")
    public void updateNhanVien(NhanVien nhanVien) {
        nhanVienService.updateNhanVien(nhanVien);
    }
    @DeleteMapping("/{id}")
    public void deleteNhanVien(NhanVien nhanVien) {
        nhanVienService.deleteNhanvienByID(nhanVien);
    }
}