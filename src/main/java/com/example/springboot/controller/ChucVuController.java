package com.example.springboot.controller;
import com.example.springboot.model.ChucVu;
import com.example.springboot.service.NhanVienService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/chucVu")
public class ChucVuController {
    private NhanVienService nhanVienService = new NhanVienService();
    @CrossOrigin
    @GetMapping("/getAll")
    public ResponseEntity<ArrayList<ChucVu>> getAllChucVu() {
        ArrayList<ChucVu> lstChucVus = new ArrayList<>();
        lstChucVus = nhanVienService.getAllChucVu();
        return ResponseEntity.ok(lstChucVus);
    }
    @GetMapping("/{id}")
    public ChucVu getChucVuByID(@PathVariable(value="id") String id) {
        return nhanVienService.getByID(id);
    }
    @PostMapping("/add")
    public ResponseEntity createChucVu(@RequestBody ChucVu chucVu) {
        System.out.println(chucVu);
        nhanVienService.addChucVu(null,chucVu.getMa(),chucVu.getTen());
        return ResponseEntity.ok(chucVu);
    }
    @PutMapping("/{id}")
    public ResponseEntity updateChucVu(@RequestBody ChucVu chucVu) {
        nhanVienService.updateChucVu(chucVu);
        return ResponseEntity.ok(chucVu);
    }
    @DeleteMapping("/{id}")
    public void deleteChucVu(@RequestBody ChucVu chucVu) {
        nhanVienService.deleteChucVuByID(chucVu);
    }
}