package com.example.springboot.jpa;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
@SpringBootApplication
@RequiredArgsConstructor
public class Runner {
    private static final Logger log = LoggerFactory.getLogger(Runner.class);
    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(Runner.class, args);
        ChucVuRepository chucVuRepository = context.getBean(ChucVuRepository.class);
        System.out.println(chucVuRepository.findChucVuByIdChucVu("7CB63C3C-69EE-4C50-A8F8-06CF078A4F8C"));
    }

//    @Bean(name="entityManagerFactory")
//    public CommandLineRunner demo(ChucVuRepository repository) {
//        return (args) -> {
//            // save a few customers
//            repository.save(new ChucVu(null,"Jack", "Bauer"));
//            // fetch all customers
//            log.info("Customers found with findAll():");
//            log.info("-------------------------------");
//            repository.findAll().forEach(customer -> {
//                log.info(customer.toString());
//            });
//            log.info("");
//            // fetch an individual customer by ID
//            Optional<ChucVu> chucVu = repository.findById("7CB63C3C-69EE-4C50-A8F8-06CF078A4F8C");
//            log.info("Customer found with findById(1L):");
//            log.info("--------------------------------");
//            log.info(chucVu.toString());
//            log.info("");
//            // fetch customers by last name
//            log.info("Customer found with findByLastName('Bauer'):");
//            log.info("--------------------------------------------");
//            repository.findChucVuByTen("Developer").forEach(newChucVu -> {
//                log.info(newChucVu.toString());
//            });
//            log.info("");
//        };
//    }

}