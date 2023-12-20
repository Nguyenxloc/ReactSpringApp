package com.example.springboot.controller;
import com.example.springboot.model.CuaHang;
import com.example.springboot.service.NhanVienService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/cuaHang")
public class CuaHangController {
    private NhanVienService nhanVienService = new NhanVienService();
    @CrossOrigin
    @GetMapping("/getAll")
    public ResponseEntity<ArrayList<CuaHang>> getAllCuaHang() {
        ArrayList<CuaHang> lstCuaHangs = new ArrayList<>();
        lstCuaHangs = nhanVienService.getAllCuaHang();
        return ResponseEntity.ok(lstCuaHangs);
    }
    @GetMapping("/{id}")
    public CuaHang getCuaHangByID(@PathVariable(value="id") String id) {
        return nhanVienService.getByIDCuaHang(id);
    }
    @PostMapping("/add")
    public ResponseEntity createCuaHang(@RequestBody CuaHang cuaHang) {
        System.out.println(cuaHang);
        nhanVienService.addCuaHang(cuaHang.getIdCuaHang(),cuaHang.getMa(),cuaHang.getTen(),cuaHang.getDiaChi(),cuaHang.getThanhPho(),cuaHang.getQuocGia());
        return ResponseEntity.ok(cuaHang);
    }
    @PutMapping("/{id}")
    public ResponseEntity updateCuaHang(@RequestBody CuaHang cuaHang) {
        nhanVienService.updateCuaHang(cuaHang);
        return ResponseEntity.ok(cuaHang);
    }
    @DeleteMapping("/{id}")
    public void deleteCuaHang(@RequestBody CuaHang cuaHang) {
        nhanVienService.deleteCuaHang(cuaHang);
    }
}